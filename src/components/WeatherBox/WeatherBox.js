import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';

const WeatherBox = props => {
	
// eslint-disable-next-line react-hooks/exhaustive-deps
const handleCityChange = useCallback(city => {
		console.log(city);

		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56df100e41d0d91d8a49682ac0efe557&units=metric`)
		.then(res => res.json())
		.then(data => {
		  console.log(data);
		});

	});

return (
    <section>
        <PickCity action={handleCityChange}/>
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;