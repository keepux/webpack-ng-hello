import * as $ from 'jquery';
import msg from './contents';
import './message.sass';
$(() => {
    $("<div id='message'>")
        .text(msg + '!')
        .appendTo('body');
});
