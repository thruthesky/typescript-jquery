/**
 * 
 */
// 아래는 jQuery Type Definition 을 참조하라는 것으로, 현재 .ts 파일로 부터 상대경로를 지정한다.
//
/// <reference path="../d.ts/jquery.d.ts" />
import {Lib} from './lib';
import {Markup} from './markup';
class Index {
    private lib: Lib;
    private markup: Markup;
    constructor() {
        console.log("index.ts constructor begins.");
        this.lib = new Lib();
        this.markup = new Markup();
    }
    getBody() {
        return $('body');
    }
    insertHeader() {
        this.getBody().prepend( this.markup.header() );
    }
    insertFooter() {
        this.getBody().append( this.markup.footer() );
    }
    start() {
        this.lib.hi();
        this.insertHeader();
        this.insertFooter();
    }
}

// 여기 이 코드는 동작하지 않는다.
// require.js 가 자바스크립트를 로드 할 때, asyn 로 로드하는데,
// 'load' 이벤트가 발생 한 후에 자바스크립트를 로드 하기 때문이다.
// window.addEventListener('load', () => { (new Movie()).start(); } );

var index = new Index();
index.start();
