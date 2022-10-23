<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body>
    <div class="flex-center position-ref full-height" id="app">

        <site-nav></site-nav>

        <div class="content">
            <div class="container mt-4">
                <transition name="fade" mode="out-in">
                    <router-view :key="$route.fullPath"></router-view>
                </transition>
            </div>
        </div>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>

</html>