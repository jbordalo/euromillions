<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand"
                    >Euromillions</router-link
                >
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/bet" activeClass="active" tag="li"
                        ><a>New Bet</a></router-link
                    >
                    <router-link to="/games" activeClass="active" tag="li"
                        ><a>My Games</a></router-link
                    >
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
</template>

<script>
export default {};
</script>