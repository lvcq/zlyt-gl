export class Scene {

    private container: HTMLDivElement | null = null;

    constructor(options: SceneOptions) {
        this.findSceneContainer(options.container);
    }

    private findSceneContainer(container: string | HTMLDivElement) {
        let containerEle: HTMLDivElement | null = null;
        if (typeof container === 'string') {
            containerEle = document.querySelector(container) as HTMLDivElement;

        } else if (container && container instanceof HTMLDivElement) {
            containerEle = container;
        }
        this.container = containerEle;
    }
}

export interface SceneOptions {
    /**
     * @description container selector or div element
     * @example
     *  ```html
     *  <div class='container'></div>
     *  ```
     * ```javascript
     *  const scene= new Scene({
     *      // ... 
     *      container:'.container'
     *      // ...
     *  });
     *  // or
     *  const element = document.querySelector('.container');
     *  const scene = new Scene({
     *      // ... 
     *      container:element
     *      // ...
     *  }) 
     * ```
     */
    container: string | HTMLDivElement;
}