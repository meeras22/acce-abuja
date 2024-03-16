<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TestimoniesAPiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->designation,
            'image' => env('APP_URL') . '/' . $this->cover_image,
            'body' => $this->body,
            'name' => $this->name,
            'create_at' => $this->created_at->format('d M, Y')
        ];
    }
}
