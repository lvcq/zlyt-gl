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

    private calcCanvasSize() {
        if (this.container) {
            const offsetHeight = this.container.offsetHeight;
            const offsetWidth = this.container.offsetWidth;
            const borderTop = this.cssPixelToNum(getComputedStyle(this.container).borderTopWidth);
            const borderRight = this.cssPixelToNum(getComputedStyle(this.container).borderRightWidth);
            const borderBottom = this.cssPixelToNum(getComputedStyle(this.container).borderBottomWidth);
            const borderLeft = this.cssPixelToNum(getComputedStyle(this.container).borderLeftWidth);
            const paddingTop = this.cssPixelToNum(getComputedStyle(this.container).paddingTop);
            const paddingRight = this.cssPixelToNum(getComputedStyle(this.container).paddingRight);
            const paddingBottom = this.cssPixelToNum(getComputedStyle(this.container).paddingBottom);
            const paddingLeft = this.cssPixelToNum(getComputedStyle(this.container).paddingLeft);
            this.screenSize = {
                width: offsetWidth - borderLeft - borderRight - paddingLeft - paddingRight,
                height: offsetHeight - borderTop - borderBottom - paddingTop - paddingBottom
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
