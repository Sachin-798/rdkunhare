<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{ 

    public function index()
{
    $services = Service::latest()->get();

    return response()->json([
        'data' => $services
    ]);
}

    // 🔹 Create service
    public function store(Request $request)
    {
        \Log::info($request->all());
        $request->validate([
            'description' => 'required|string',
             'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:10240',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('services', 'public');
        }

        $service = Service::create([
            'description' => $request->description,
            'image' => $imagePath
        ]);

        return response()->json([
            'message' => 'Service created successfully',
            'data' => $service
        ], 201);
    }

    // 🔹 Update service
    public function update(Request $request, $id)
    {
        $request->validate([
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:10240'
        ]);

        $service = Service::findOrFail($id);

        // delete old image if new uploaded
        if ($request->hasFile('image')) {
            if ($service->image && Storage::disk('public')->exists($service->image)) {
                Storage::disk('public')->delete($service->image);
            }

            $service->image = $request->file('image')->store('services', 'public');
        }

        $service->description = $request->description;
        $service->save();

        return response()->json([
            'message' => 'Service updated successfully',
            'data' => $service
        ]);
    }

    // 🔹 Delete service
    public function destroy($id)
    {
        $service = Service::findOrFail($id);

        if ($service->image && Storage::disk('public')->exists($service->image)) {
            Storage::disk('public')->delete($service->image);
        }

        $service->delete();

        return response()->json([
            'message' => 'Service deleted successfully'
        ]);
    }
}
