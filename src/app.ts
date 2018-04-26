import * as $ from 'jquery';
import msg from './contents';
import './message.css';
$(() => {
    $("<div id='message'>")
        .text(msg + '!')
        .appendTo('body');
});
