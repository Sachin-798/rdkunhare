<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Property;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class PropertyController extends Controller
{
    /**
     * 🔹 List all properties (Admin)
     * GET /api/admin/property
     */
    public function index()
    {
        $properties = Property::latest()->get();

        return response()->json([
            'status' => true,
            'data'   => $properties
        ], 200);
    }

    /**
     * 🔹 Store new property
     * POST /api/admin/property
     */
    public function store(Request $request)
    {
        // ✅ Validation
        $validated = $request->validate([
            'title'           => 'required|string|max:255',
            'material_brand'  => 'required|string|max:255',
            'property_size'   => 'required|numeric|min:1',
            'price'           => 'required|numeric|min:0',
        ]);

        DB::beginTransaction();

        try {
            // ✅ Slug generate (unique)
            $slug = Str::slug($validated['title']);
            $count = Property::where('slug', 'like', $slug . '%')->count();
            if ($count > 0) {
                $slug = $slug . '-' . ($count + 1);
            }

            // ✅ Create property
            $property = Property::create([
                'title'          => $validated['title'],
                'slug'           => $slug,
                'material_brand' => $validated['material_brand'],
                'property_size'  => $validated['property_size'],
                'price'          => $validated['price'],
            ]);

            DB::commit();

            return response()->json([
                'status'  => true,
                'message' => 'Property created successfully',
                'data'    => $property
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'status'  => false,
                'message' => 'Something went wrong',
                'error'   => $e->getMessage()
            ], 500);
        }
    }

    /**
     * 🔹 Show property by slug
     * GET /api/admin/property/{slug}
     */
    public function showBySlug($slug)
    {
        $property = Property::where('slug', $slug)->first();

        if (!$property) {
            return response()->json([
                'status' => false,
                'message' => 'Property not found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => $property
        ], 200);
    }

    /**
     * 🔹 Delete property by slug
     * DELETE /api/admin/property/{slug}
     */
    public function destroy($slug)
    {
        try {
            $property = Property::where('slug', $slug)->first();

            if (!$property) {
                return response()->json([
                    'status' => false,
                    'message' => 'Property not found'
                ], 404);
            }

            $property->delete();

            return response()->json([
                'status' => true,
                'message' => 'Property deleted successfully'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Server error',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
