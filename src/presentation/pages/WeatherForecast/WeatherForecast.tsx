/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/core';
import { useSelector } from 'react-redux';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { DefaultLayout } from 'layouts/DefaultLayout';
import { Flex } from 'components/Flex';
import {
  handleFetchWeather,
  handleGetPosition,
  handleLatitudeInput,
  handleLongitudeInput,
  State,
} from '../../store';
import { Input } from 'components/Input';
import { Margin } from 'components/Margin';
import { Spacer } from 'components/Spacer';
import { Text, TextError } from './components';

export const WeatherForecast: FunctionComponent = () => {
  const { position, weather } = useSelector((state: State) => ({
    position: state.position,
    weather: state.weather,
  }));

  return (
    <DefaultLayout>
      <Flex css={{ justifyContent: 'center' }}>
        <Text variant="title">Weather forecast app</Text>
      </Flex>
      <Spacer height={2} />
      <Box>
        <Text>Input your coordinates below</Text>
        <Flex css={{ flexWrap: 'wrap' }}>
          <Margin b={3} l={2} r={2} t={3}>
            <Input
              isDisabled={position.isLoading}
              onChange={handleLatitudeInput}
              placeholder="Latitude"
              type="number"
              value={position.position.latitude}
            />
          </Margin>
          <Margin b={3} l={2} r={2} t={3}>
            <Input
              isDisabled={position.isLoading}
              onChange={handleLongitudeInput}
              placeholder="Longitude"
              type="number"
              value={position.position.longitude}
            />
          </Margin>
        </Flex>
        <Text>or</Text>
        <Flex css={{ alignItems: 'center', flexWrap: 'wrap' }}>
          <Button isDisabled={position.isLoading} onClick={handleGetPosition}>
            Get position
          </Button>
          {position.error !== null && (
            <TextError>
              Position error: {position.error.error.message}
            </TextError>
          )}
        </Flex>
      </Box>
      <Box>
        <Text>then</Text>
        <Flex css={{ alignItems: 'center', flexWrap: 'wrap' }}>
          <Button
            isDisabled={
              !position.isValid || position.isLoading || weather.isLoading
            }
            onClick={() =>
              handleFetchWeather(
                position.position.latitude,
                position.position.longitude
              )
            }
          >
            Fetch weather
          </Button>
          {weather.error !== null && (
            <TextError>Weather error: {weather.error.error.message}</TextError>
          )}
        </Flex>
        <Spacer height={3} />
        {weather.weather !== null && (
          <Card>
            <Flex css={{ justifyContent: 'center' }}>
              <Text variant="title">Forecast</Text>
            </Flex>
            {weather.weather.place && (
              <Text>The weather today in {weather.weather.place}</Text>
            )}
            <Text>
              Weather is {weather.weather.name.toLowerCase()}:{' '}
              {weather.weather.description}
            </Text>
            <Text>
              Temperature is {weather.weather.temperature.current} &#8451;
            </Text>
          </Card>
        )}
      </Box>
    </DefaultLayout>
  );
};
