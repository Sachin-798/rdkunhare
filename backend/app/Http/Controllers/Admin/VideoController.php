<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Video;
use Illuminate\Support\Facades\Storage;

class VideoController extends Controller
{
    // Upload video
    public function store(Request $request)
    {
        $request->validate([
            'video' => 'required|mimes:mp4,mov,avi,webm|mimetypes:video/mp4,video/quicktime,video/x-msvideo,video/webm|max:51200',
        ]);

        $videoPath = $request->file('video')->store('videos', 'public');
       


        $video = Video::create([
            'video' => $videoPath,
        ]);

        return response()->json([
            'message' => 'Video uploaded successfully',
            'data' => [
                'id' => $video->id,
                'video' => $video->video,
                'video_url' => asset('storage/' . $video->video),
            ],
        ], 201);
    }

    // List videos
  
public function index()
{
    $videos = Video::latest()->get()->map(function ($video) {
        return [
            'id' => $video->id,
            'video' => $video->video,
            'video_url' => asset('storage/' . $video->video),
            'created_at' => $video->created_at,
        ];
    });

    return response()->json([
        'data' => $videos
    ]);
}

    // Update video
    public function update(Request $request, $id)
    {
        $request->validate([
            'video' => 'required|mimes:mp4,mov,avi,webm|mimetypes:video/mp4,video/quicktime,video/x-msvideo,video/webm|max:51200',
        ]);

        $video = Video::findOrFail($id);

        if ($video->video && Storage::disk('public')->exists($video->video)) {
            Storage::disk('public')->delete($video->video);
        }

        $videoPath = $request->file('video')->store('videos', 'public');
        $video->update(['video' => $videoPath]);

        return response()->json([
            'message' => 'Video updated successfully',
            'data' => [
                'id' => $video->id,
                'video' => $video->video,
                'video_url' => asset('storage/' . $video->video),
            ],
        ]);
    }

    // Delete video
    public function destroy($id)
    {
        $video = Video::findOrFail($id);

        if ($video->video && Storage::disk('public')->exists($video->video)) {
            Storage::disk('public')->delete($video->video);
        }

        $video->delete();

        return response()->json([
            'message' => 'Video deleted successfully',
        ]);
    }
}
