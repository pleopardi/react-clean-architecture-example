/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/core';
import { useSelector } from 'react-redux';
import { Button } from 'components/Button';
import {
  handleFetchWeather,
  handleGetPosition,
  handleLatitudeInput,
  handleLongitudeInput,
  State,
} from '../../store';
import { Input } from 'components/Input';

export const WeatherForecast: FunctionComponent = () => {
  const { position, weather } = useSelector((state: State) => ({
    position: state.position,
    weather: state.weather,
  }));

  return (
    <div css={{ height: '100%', width: '100%' }}>
      <div>
        <p>Input your coordinates below</p>
        <div css={{ display: 'flex' }}>
          <Input
            onChange={handleLatitudeInput}
            type="number"
            value={position.position.latitude}
          />
          <Input
            onChange={handleLongitudeInput}
            type="number"
            value={position.position.longitude}
          />
        </div>
        <p>or</p>
        <Button onClick={handleGetPosition} isDisabled={position.isLoading}>
          Get position
        </Button>
        {position.error !== null && (
          <p>Position error: {position.error.error.message}</p>
        )}
      </div>
      <div>
        <p>then</p>
        <Button
          isDisabled={!position.isValid || position.isLoading}
          onClick={() =>
            handleFetchWeather(
              position.position.latitude,
              position.position.longitude
            )
          }
        >
          Fetch weather
        </Button>
        {weather.weather !== null && (
          <div>
            {weather.weather.place && (
              <p>The weather today in {weather.weather.place}</p>
            )}
            <p>
              Weather is {weather.weather.name.toLowerCase()}:{' '}
              {weather.weather.description}
            </p>
            <p>Temperature is {weather.weather.temperature.current} &#8451;</p>
          </div>
        )}
        {weather.error !== null && (
          <p>Weather error: {weather.error.error.message}</p>
        )}
      </div>
    </div>
  );
};
