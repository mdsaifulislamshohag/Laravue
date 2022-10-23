<template>
    <div class="card">
        <div class="card-header">
            <h3>User Registration</h3>
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="Enter Full Name"
                    />
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="email"
                        placeholder="Enter email"
                    />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div>

                <div class="form-group">
                    <label for="c_password">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="c_password"
                        placeholder="Confirm Password"
                    />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>
