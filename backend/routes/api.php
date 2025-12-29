<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\AdminLoginController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\VideoController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\PropertyController;
use App\Http\Controllers\Admin\PropertiesImageController;

Route::post('/admin/login', [AdminLoginController::class, 'login']);

// CONTACT ROUTES (Public)
// Route::post('/contact/send-otp',[ContactController::class,'sendOtp']);
// Route::post('/contact/verify-otp',[ContactController::class,'verifyOtp']);
Route::post('/contact/send', [ContactController::class, 'sendMessage']);
Route::get('/property/{slug}', [PropertyController::class, 'showBySlug']);

// Route::get('/test-mail', function () {
//     Mail::raw('Mailtrap test successful', function ($message) {
//         $message->to('admin@test.com')
//                 ->subject('Test Mail');
//     });

//     return "Mail Sent";
// });

Route::middleware(['auth:sanctum', 'is_admin'])
    ->prefix('admin')
    ->group(function () {

         // SERVICES
        Route::apiResource('services', ServiceController::class);

        // VIDEOS
        Route::apiResource('videos', VideoController::class);

        // BLOG
        Route::apiResource('blog', BlogController::class);

         Route::get('property', [PropertyController::class, 'index']); // List all properties
         Route::post('property', [PropertyController::class, 'store']); // Create property
         Route::get('property/{id}', [PropertyController::class, 'show']); // Get single property by ID
         Route::put('property/{id}', [PropertyController::class, 'update']); // Update property by ID
         Route::delete('property/{id}', [PropertyController::class, 'destroy']); // Delete property by ID
         Route::get('property/service/{serviceId}', [PropertyController::class, 'getPropertiesByService']); // Get properties by service


         Route::post('/create_propertiesimage_table', [PropertiesImageController::class, 'store']);

         Route::get('/propertiesimage', [PropertiesImageController::class, 'index']);
        Route::get('/propertiesimage/{id}', [PropertiesImageController::class, 'show']);
        Route::put('/propertiesimage/{id}', [PropertiesImageController::class, 'update']);
        Route::delete('/propertiesimage/{id}', [PropertiesImageController::class, 'destroy']);
        // // SERVICES
        // Route::get('/services/{slug}', [ServiceController::class, 'index']);
        // Route::post('/services/{slug}', [ServiceController::class, 'store']);
        // Route::put('/services/{id}/{slug}', [ServiceController::class, 'update']);
        // Route::delete('/services/{id}/{slug}', [ServiceController::class, 'destroy']);

        // // VIDEOS
        // Route::get('/videos/{slug}', [VideoController::class, 'index']);
        // Route::post('/videos/{slug}', [VideoController::class, 'store']);
        // Route::put('/videos/{id}/{slug}', [VideoController::class, 'update']);
        // Route::delete('/videos/{id}/{slug}', [VideoController::class, 'destroy']);

        // Route::get('/blog/{slug}', [BlogController::class, 'index']);
        // Route::post('/blog/{slug}', [BlogController::class, 'store']);
        // Route::get('/blog/{id}/{slug}', [BlogController::class, 'show']);
        // Route::delete('/blog/{id}/{slug}', [BlogController::class, 'destroy']);

        
        // Route::get('/property/create', [PropertyController::class, 'create'])
        //   ->name('admin.property.create');

        // Route::post('/property/store', [PropertyController::class, 'store'])
        //   ->name('admin.property.store');
    });



