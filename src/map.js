ymaps.ready(init);
function init() {
    let myMap = new ymaps.Map("map", {
        center: [55.49006, 37.855626], // Координаты центра карты
        zoom: 16 // Масштаб карты
    });

    // Добавляем кнопки приближения и отдаления
    let zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "small",
            position: {
                top: 150,
                right: 10
            }
        }
    });
    myMap.controls.add(zoomControl);
    let geolocationControl = new ymaps.control.GeolocationControl({
        options: {
            noPlacemark: true,
            position: {
                top: 215,
                right: 10
            }
        }
    });
    myMap.controls.add(geolocationControl);

    // Добавляем маркер
    let myMarker = new ymaps.Placemark([55.49006, 37.855626], {
        hintContent: 'Русское ремесло', // Всплывающая подсказка
        balloonContent:  `
        <div class="balloon-wrapper"><p>Русское ремесло</p></div>
      
        `, // Содержимое балуна
    },{
        iconLayout: 'default#image',
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/25/25613.png',
        icon_imagesize: [20, 20],
        iconImageOffset: [-10, -20]
    });

    myMap.geoObjects.add(myMarker);
    myMarker.balloon.open();

    // Убираем логотип
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('geolocationControl');
}