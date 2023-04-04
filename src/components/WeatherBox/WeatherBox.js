import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';
import ErrorBox from '../ErrorBox/ErrorBox'

const WeatherBox = props => {

	const [weather, setWeather] = useState('');

	const [load, setLoading] = useState(false);

	const [showError, setShowError] = useState(false);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleCityChange = useCallback(city => {
		setShowError(false)
		setLoading(true);
		console.log(city);

		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56df100e41d0d91d8a49682ac0efe557&units=metric`)
			

		.then(res => {
			if(res.status === 200) {
			  return res.json()
				.then(data => {
	  
				  const weatherData = {
					city: data.name,
					temp: data.main.temp,
					icon: data.weather[0].icon,
					description: data.weather[0].main
				  };
	  
				  setLoading(false)
				  setWeather(weatherData)
				  console.log(weatherData);
				})
			  } else {
				setShowError(true)
			  }
		  })
		}); 

	return (
		<section>
			<PickCity action={handleCityChange} />
			{weather && !load && <WeatherSummary {...weather} />}
			{load && <Loader />}
			<Loader />
			{showError && <ErrorBox /> }
		</section>
	)
};

export default WeatherBox;