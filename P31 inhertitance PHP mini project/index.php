<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Car Wash Management System</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="container">
    <h2>Car Wash Management System</h2>
    <div class="car-list">
        <?php

        class Vehicle {
            protected $make;
            protected $model;
            protected $year;

            public function __construct($make, $model, $year) {
                $this->make = $make;
                $this->model = $model;
                $this->year = $year;
            }

            public function displayInfo() {
                echo "<p>Make: " . $this->make . "</p>";
                echo "<p>Model: " . $this->model . "</p>";
                echo "<p>Year: " . $this->year . "</p>";
            }
        }

        class Car extends Vehicle {
            private $color;
            private $licensePlate;

            public function __construct($make, $model, $year, $color, $licensePlate) {
                parent::__construct($make, $model, $year);
                $this->color = $color;
                $this->licensePlate = $licensePlate;
            }

            public function displayInfo() {
                parent::displayInfo();
                echo "<p>Color: " . $this->color . "</p>";
                echo "<p>License Plate: " . $this->licensePlate . "</p>";
            }

            public function wash() {
                echo "<p>Washing the car...</p>";
            }
        }

        // Create car objects
        $car1 = new Car('Toyota', 'Camry', 2020, 'Blue', 'ABC123');
        $car2 = new Car('Honda', 'Accord', 2018, 'Red', 'XYZ456');
        $car3 = new Car('Ford', 'Focus', 2019, 'Silver', 'DEF789');

        // Display car information
        $car1->displayInfo();
        $car1->wash();

        $car2->displayInfo();
        $car2->wash();

        $car3->displayInfo();
        $car3->wash();
        ?>
    </div>
</div>
</body>
</html>
