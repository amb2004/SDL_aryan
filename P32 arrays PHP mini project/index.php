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
        // Associative array to store car information
        $cars = array(
            array(
                'make' => 'Toyota',
                'model' => 'Camry',
                'year' => 2020,
                'color' => 'Blue',
                'licensePlate' => 'ABC123'
            ),
            array(
                'make' => 'Honda',
                'model' => 'Accord',
                'year' => 2018,
                'color' => 'Red',
                'licensePlate' => 'XYZ456'
            ),
            array(
                'make' => 'Ford',
                'model' => 'Focus',
                'year' => 2019,
                'color' => 'Silver',
                'licensePlate' => 'DEF789'
            )
        );

        // Function to display car information
        function displayCarInfo($car) {
            echo "<div class='car'>";
            echo "<h3>" . $car['make'] . " " . $car['model'] . "</h3>";
            echo "<p>Year: " . $car['year'] . "</p>";
            echo "<p>Color: " . $car['color'] . "</p>";
            echo "<p>License Plate: " . $car['licensePlate'] . "</p>";
            echo "</div>";
        }

        // Display car information
        foreach ($cars as $car) {
            displayCarInfo($car);
        }
        ?>
    </div>
</div>
</body>
</html>
