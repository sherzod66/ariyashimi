import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps"

const YMap = () => {
	return <YMaps query={{ apikey: '133b3708-1c55-470b-8767-19e75d2d9d81' }} className="g__map">
		<Map className="g__map-width" defaultState={{ center: [39.661979, 66.906486], zoom: 18, }} >
			<Placemark
				modules={["geoObject.addon.balloon"]}
				defaultGeometry={[39.661979, 66.906486]}
				properties={{
					balloonContentHeader: 'Ariashimi',
					balloonContentBody: 'Центральный офис',
					balloonContentFooter: 'Ariashimi, производитель пестицидов и сельскохозяйственных удобрений',
				}}
				options={{
					iconLayout: 'default#image',
					iconImageHref: 'https://cdn-icons-png.flaticon.com/512/143/143960.png',
					iconImageSize: [35, 35],
					iconImageOffset: [-18, -34],
				}}
			/>
		</Map>
	</YMaps>
}
export default YMap