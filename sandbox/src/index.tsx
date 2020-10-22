import React from 'react';
import ReactDOM from 'react-dom';
import { Presentation, Slide } from '@nsbarsukov/preza/core';
import { CodeSlide, StackSlide } from '@nsbarsukov/preza/smartSlides';

let browserTabTitle: string | undefined;

const App = () => {
    return (
        <Presentation>
            <Slide title={<h2>Привет!</h2>}>
                <p>
                    Сейчас покажу, какие классные слайды можно сделать
                </p>
            </Slide>
            <Slide>
              <Slide title={<h2>Я вертикальный слайд</h2>}>
                  <p>Нажми стрелочку вниз на клавиатуре или свайпни вниз на телефоне</p>
              </Slide>
              <Slide title={<h2>Я тоже вертикальный</h2>}>
                  <p>Я нахожусь ниже</p>
              </Slide>
            </Slide>
            <CodeSlide
                highlightLineNumbers="|4,8-11|17|22-24"
                title={<h2>А я умею красиво писать код</h2>}
                code={`
                    import React, {useState} from 'react';

                    function Example() {
                        const [count, setCount] = useState(0);
            
                        return (
                            <div>
                                <p>You clicked {count} times</p>
                                <button onClick={() => setCount(count + 1)}>
                                Click me
                                </button>
                            </div>
                        );
                    }
            
                    function SecondExample() {
                        const [count, setCount] = useState(0);
            
                        return (
                            <div>
                                <p>You clicked {count} times</p>
                                <button onClick={() => setCount(count + 1)}>
                                Click me
                                </button>
                            </div>
                        );
                    }
                `}
            />
            <Slide>
              <Slide title={<h2>А я умею воспроизводить видео</h2>}>
                  <video data-autoplay src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
              </Slide>
              <Slide>
                  <iframe data-src="https://hakim.se" data-preload title="websiteExample"></iframe>
              </Slide>
            </Slide>
            <StackSlide>
                <img src="https://placekitten.com/450/300" width="450" height="300" alt="1" />
                <img src="https://placekitten.com/300/450" width="300" height="450" alt="2" />
                <img src="https://placekitten.com/400/400" width="400" height="400" alt="3" />
            </StackSlide>
        </Presentation>
    );
};


/**
 * ======================================
 * Техническая часть рендера (не трогать)
 * ======================================
 */
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
const browserTitle = document.getElementById('browser-title');
if (browserTitle) {
    browserTitle.innerText = browserTabTitle || 'Презентация';
}
