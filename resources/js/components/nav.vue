<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container">
                <a class="navbar-brand" href>{{$store.state.appname}}</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/register" class="nav-link">Register</router-link>
                        </li>

                        <li class="nav-item">
                            <button class="nav-link" @click="logout">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            if (localStorage.getItem("access_token")) {
                let token = JSON.parse(localStorage.getItem("access_token"));
                let axiosConfig = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                };
                axios
                    .get("/api/logoutt", axiosConfig)
                    .then(response => {
                        // localStorage.removeItem("access_token");
                        console.log(response.data);
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            console.log(error.response);
                        }
                    });
            }
        }
    }
};
</script>