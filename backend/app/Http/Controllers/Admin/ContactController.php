<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use App\Models\Contact;
use App\Models\Otp;

use App\Mail\OtpMail;
use App\Mail\AdminContactMail;
use App\Mail\ContactMessageMail;

class ContactController extends Controller
{
    // STEP 1: SEND OTP
    public function sendOtp(Request $request)
    {
        $request->validate([
            'name'    => 'required',
            'email'   => 'required|email',
            'number'  => 'required',
            'message' => 'required'
        ]);

        $contact = Contact::create($request->only([
            'name','email','number','message'
        ]));

        $otp = rand(100000, 999999);

        Otp::updateOrCreate(
            ['email' => $request->email],
            [
                'otp'        => $otp,
                'expires_at'=> now()->addMinutes(10)
            ]
        );

        Mail::to($request->email)->send(new OtpMail($otp));

        return response()->json([
            'message'    => 'OTP sent to email',
            'contact_id'=> $contact->id
        ]);
    }

    // STEP 2: VERIFY OTP
    public function verifyOtp(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp'   => 'required'
        ]);

        $otpData = Otp::where('email', $request->email)
            ->where('otp', $request->otp)
            ->where('expires_at', '>', now())
            ->first();

        if (!$otpData) {
            return response()->json(['message' => 'Invalid or expired OTP'], 422);
        }

        Otp::where('email', $request->email)->delete();

        $contact = Contact::where('email', $request->email)->first();
        $contact->update(['is_verified' => true]);

        Mail::to(env('ADMIN_EMAIL'))
            ->send(new AdminContactMail($contact));

        return response()->json([
            'message' => 'OTP verified & message sent to admin'
        ]);
    }

    // DIRECT CONTACT (NO OTP)
    public function sendMessage(Request $request)
    {
        $request->validate([
            'name'    => 'required|string|max:100',
            'email'   => 'required|email',
            'number'  => 'required|min:10',
            'message' => 'required|string'
        ]);

        Mail::to(env('ADMIN_EMAIL'))
            ->send(new ContactMessageMail($request->all()));

        return response()->json([
            'message' => 'Message successfully send'
        ]);
    }
}
