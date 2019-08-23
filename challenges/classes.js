// 1. Copy and paste your prototype in here and refactor into class syntax.

(function() {

    class CuboidMaker {
        constructor(length, width, height) {
            this.length = length;
            this.width = width;
            this.height = height;
        }

        volume() {
            return this.length * this.width * this.height;
        }

        surfaceArea() {
            return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        }
    }

    class CubeMaker extends CuboidMaker {
        constructor(length, width, height) {
            super(length, width, height);
        }
    }

    const cuboid = new CuboidMaker(4, 5, 5);
    const cube = new CubeMaker(4, 4, 4);

    // Test your volume and surfaceArea methods by uncommenting the logs below:
    // console.log(cuboid.volume()); // 100
    // console.log(cuboid.surfaceArea()); // 130

    // console.log(cube.volume()); // 100
    // console.log(cube.surfaceArea()); // 130
})();