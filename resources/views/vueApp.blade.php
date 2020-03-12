<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Laravel Vue SPA </title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div class="container">
        <h3>Crud on SPA</h3>
        <section id="app"></section>
    </div>
    <script>
        window.laravel = <?php json_encode([
            'csrfToken' => csrf_token(),
        ]) ?>
    </script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>