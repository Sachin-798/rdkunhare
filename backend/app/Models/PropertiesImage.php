<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertiesImage extends Model
{
    use HasFactory;

    protected $table = 'propertiesimage';

    protected $fillable = [
        'title',
        'material_brand',
        'property_size',
        'price',
        'service_id'
    ];
}
