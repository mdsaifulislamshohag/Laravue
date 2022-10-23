<template>
    <div class="card">
        <div class="card-header">
            <h3>User Login</h3>
        </div>
        <div class="card-body">
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        v-model="email"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        v-model="password"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    created() {
        this.getUser();
    },
    methods: {
        login() {
            const data = {
                email: this.email,
                password: this.password
            };
            axios
                .post("/api/login", data)
                .then(response => {
                    console.log(response.data.token);
                    let access_token = JSON.stringify(
                        response.data.access_token
                    );
                    localStorage.setItem("access_token", access_token);
                    this.getUser();
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        console.log(error.response);
                    }
                });
        },
        getUser() {
            if (localStorage.getItem("access_token")) {
                let token = JSON.parse(localStorage.getItem("access_token"));
                let axiosConfig = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                };
                axios
                    .get("/api/user", axiosConfig)
                    .then(response => {
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