<form method="POST" action="{{ route('admin.property.store') }}"
      enctype="multipart/form-data">
@csrf

<input type="text" name="title" placeholder="Property Title" required>

<input type="text" name="material_brand" placeholder="Material Brand" required>

<input type="number" name="property_size" placeholder="Size (sqft)" required>

<input type="number" name="price" placeholder="Price" required>

<input type="file" name="images[]" multiple required>

<input type="text" id="address" placeholder="Search location">

<input type="hidden" name="latitude" id="lat">
<input type="hidden" name="longitude" id="lng">

<div id="map" style="height:400px"></div>

<button type="submit">Save Property</button>
</form>

<script>
let map, marker;

function initMap(){
    const defaultLoc = { lat: 28.6139, lng: 77.2090 };

    document.getElementById("lat").value = defaultLoc.lat;
    document.getElementById("lng").value = defaultLoc.lng;

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: defaultLoc
    });

    marker = new google.maps.Marker({
        position: defaultLoc,
        map: map,
        draggable: true
    });

    marker.addListener("dragend", () => {
        document.getElementById("lat").value = marker.getPosition().lat();
        document.getElementById("lng").value = marker.getPosition().lng();
    });

    const searchBox = new google.maps.places.SearchBox(
        document.getElementById("address")
    );

    searchBox.addListener("places_changed", () => {
        const place = searchBox.getPlaces()[0];
        if (!place || !place.geometry) return;

        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);

        document.getElementById("lat").value = place.geometry.location.lat();
        document.getElementById("lng").value = place.geometry.location.lng();
    });
}
</script>

<script
  src="https://maps.googleapis.com/maps/api/js?key={{ env('GOOGLE_MAPS_API_KEY') }}&libraries=places&callback=initMap"
  async defer>
</script>
