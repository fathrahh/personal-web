import { CanvasBase } from "./CanvasBase";

interface CarConstructor {
  c: CanvasRenderingContext2D;
  x: number;
  y: number;
  variant: CanvasImageSource;
  carSize: CarSize;
  velocity: number;
}

type Position = {
  x: number;
  y: number;
};

type CarSize = {
  width: number;
  height: number;
};

export class Car extends CanvasBase {
  private initialPosition: Position;
  private position: Position;
  private currentPoint: number;
  private carSize: CarSize;
  private velocity: number;
  private variant: CanvasImageSource;

  public constructor({ c, x, y, variant, carSize, velocity }: CarConstructor) {
    super(c);
    this.position = { x, y };
    this.carSize = { ...carSize };
    this.initialPosition = { x, y };
    this.velocity = velocity;
    this.currentPoint = 0;
    this.variant = variant;
  }

  public show = () => {
    this.c.drawImage(
      this.variant,
      this.position.x,
      this.position.y,
      this.carSize.width,
      this.carSize.height
    );

    this.c.strokeStyle = "white";
    this.c.strokeText(
      this.currentPoint.toString(),
      this.position.x,
      this.position.y
    );
  };
  public update = () => {
    // Update Something here
    this.position.x += this.velocity;
  };

  public resetPosition = () => {
    this.position.x = this.initialPosition.x;
  };

  public set currentPosition(position: number) {
    this.currentPosition = position;
  }
}
