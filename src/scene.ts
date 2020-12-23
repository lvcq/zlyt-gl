export class Scene {

    private container: HTMLDivElement | null = null;
    private canvas: HTMLCanvasElement | null = null;
    private screenSize: Size2D = {
        width: 0,
        height: 0
    };

    constructor(options: SceneOptions) {
        this.findSceneContainer(options.container);
        this.setContainerAttribute();
        this.calcCanvasSize();
        this.createCanvas();
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

    /**
     * @description 修改容器属性
     */
    private setContainerAttribute() {
        if (this.container) {
            this.container.classList.add('zlyt-gl-container');
            this.container.style.position = 'relative'
        }
    }

    /**  
     *  @description 创建canvas元素 
     */
    private createCanvas() {
        const canvasElement = document.createElement('canvas');
        canvasElement.classList.add('zlyt-gl-canvas');
        canvasElement.style.height = `${this.screenSize.height}px`;
        canvasElement.style.width = `${this.screenSize.width}px`;
        this.container?.appendChild(canvasElement);
        this.canvas = canvasElement;
    }

    /**
     * @description 计算canvas尺寸，clientSize - paddingSize
     */
    private calcCanvasSize() {
        if (this.container) {
            const clientHeight = this.container.clientHeight;
            const clientWidth = this.container.clientWidth;
            const paddingTop = this.cssPixelToNum(getComputedStyle(this.container).paddingTop);
            const paddingRight = this.cssPixelToNum(getComputedStyle(this.container).paddingRight);
            const paddingBottom = this.cssPixelToNum(getComputedStyle(this.container).paddingBottom);
            const paddingLeft = this.cssPixelToNum(getComputedStyle(this.container).paddingLeft);
            this.screenSize = {
                width: clientWidth - paddingLeft - paddingRight,
                height: clientHeight - paddingTop - paddingBottom
            }
        }
    }

    private cssPixelToNum(pixel: string): number {
        return Number(pixel.replace('px', '')) || 0;
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

/**
 * @description 二维尺寸
 */
export interface Size2D {
    width: number;
    height: number;
}
