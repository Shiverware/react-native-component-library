import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { centered } from '../decorators';
import { Hero, ChannelValue, wrapIcon } from '@pxblue/react-native-components';
import _Leaf from '@pxblue/icons-svg/leaf.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Leaf = wrapIcon({ IconClass: _Leaf });
const Line = wrapIcon({ IconClass: Icon, name: 'chart-line-variant' });
const Clock = wrapIcon({ IconClass: Icon, name: 'clock-outline' });

storiesOf('Hero', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add('with basic properties', () => (
        <Hero
            style={{ width: '100%' }}
            label={text('label', 'Efficiency')}
            IconClass={Leaf}
            value={text('value', '94')}
            units={text('units', '%')}
        />
    ))
    .add('with ChannelValue children', () => (
        <Hero style={{ width: '100%' }} label={text('label', 'Duration')} IconClass={Clock}>
            <ChannelValue fontSize={20} value={text('hours', '1')} units={'h'} />
            <ChannelValue fontSize={20} value={text('minutes', '27')} units={'m'} />
        </Hero>
    ))
    .add('with press event', () => (
        <Hero
            style={{ width: '100%' }}
            label={text('label', 'Efficiency')}
            IconClass={Leaf}
            value={text('value', '94')}
            units={text('units', '%')}
            action
            onPress={(): void => {
                action('clicked alarms');
            }}
        />
    ))
    .add('with full customization', () => (
        <Hero
            style={{ width: '100%' }}
            label={text('label', 'Efficiency')}
            IconClass={Leaf}
            iconSize={48}
            iconColor={'primary'}
            fontSize={24}
            value={text('value', '94')}
            ValueIconClass={Line}
            valueColor={'green'}
            units={text('units', '%')}
        />
    ));
