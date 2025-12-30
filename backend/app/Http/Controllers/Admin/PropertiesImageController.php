<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PropertiesImage;

class PropertiesImageController extends Controller
{
    /**
     * 🔹 Get All Properties Images
     * GET /api/propertiesimage
     */
    public function index()
    {
        $properties = PropertiesImage::latest()->get();

        return response()->json([
            'status' => true,
            'message' => 'Properties Image List',
            'data' => $properties
        ], 200);
    }

    /**
     * 🔹 Create Properties Image
     * POST /api/create_propertiesimage_table
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'           => 'required|string|max:255',
            'material_brand'  => 'nullable|string|max:255',
            'property_size'   => 'nullable|string|max:100',
            'price'           => 'required|numeric',
            'service_id'      => 'required|exists:services,id',
        ]);

        $property = PropertiesImage::create($validated);

        return response()->json([
            'status' => true,
            'message' => 'Property Image Created Successfully',
            'data' => $property
        ], 201);
    }

    /**
     * 🔹 Get Single Properties Image
     * GET /api/propertiesimage/{id}
     */
    public function show($id)
    {
        $property = PropertiesImage::find($id);

        if (!$property) {
            return response()->json([
                'status' => false,
                'message' => 'Property Image Not Found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => $property
        ], 200);
    }

    /**
     * 🔹 Update Properties Image
     * PUT /api/propertiesimage/{id}
     */
    public function update(Request $request, $id)
    {
        $property = PropertiesImage::find($id);

        if (!$property) {
            return response()->json([
                'status' => false,
                'message' => 'Property Image Not Found'
            ], 404);
        }

        $validated = $request->validate([
            'title'           => 'sometimes|required|string|max:255',
            'material_brand'  => 'nullable|string|max:255',
            'property_size'   => 'nullable|string|max:100',
            'price'           => 'sometimes|required|numeric',
            'service_id'      => 'sometimes|required|exists:services,id',
        ]);

        $property->update($validated);

        return response()->json([
            'status' => true,
            'message' => 'Property Image Updated Successfully',
            'data' => $property
        ], 200);
    }

    /**
     * 🔹 Delete Properties Image
     * DELETE /api/propertiesimage/{id}
     */
    public function destroy($id)
    {
        $property = PropertiesImage::find($id);

        if (!$property) {
            return response()->json([
                'status' => false,
                'message' => 'Property Image Not Found'
            ], 404);
        }

        $property->delete();

        return response()->json([
            'status' => true,
            'message' => 'Property Image Deleted Successfully'
        ], 200);
    }
}
