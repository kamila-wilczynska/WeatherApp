import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';

const WeatherBox = props => {
	
// eslint-disable-next-line react-hooks/exhaustive-deps
const handleCityChange = useCallback(city => {
		console.log(city);
	})  

return (
    <section>
        <PickCity action={handleCityChange}/>
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;