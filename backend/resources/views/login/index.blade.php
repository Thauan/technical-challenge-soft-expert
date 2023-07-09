@extends('layouts.index')

@section('title', 'Login - Soft Expert')

@section('content')
<div id="app">
    <div class="sidenav">
        <div class="login-main-text">
            <h2>Application<br> Login Page</h2>
            <p>Login or register from here to access.</p>
        </div>
    </div>
    <div class="main">
        <div class="col-md-6 col-sm-12">
            <div class="login-form">
                <form>
                    <div class="form-group">
                        <label class="ps-1">E-mail</label>
                        <input type="text" class="form-control" placeholder="Digite o e-mail">
                    </div>
                    <div class="form-group pt-3">
                        <label class="ps-1">Senha</label>
                        <input type="password" class="form-control" placeholder="Digite a senha">
                    </div>
                    <div class="pt-3 d-flex flex-column">
                        <button type="submit" class="btn btn-black">Entrar</button>
                        <button type="submit" class="btn btn-secondary">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- <div class="container">
        <h1>Login</h1>
    </div> -->
</div>
@endsection


@section('scripts')
<style>
.main-head{
    height: 150px;
    background: #FFF;

}

.sidenav {
    height: 100%;
    background-color: #000;
    overflow-x: hidden;
    padding-top: 20px;
}


.main {
    padding: 0px 10px;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}

@media screen and (min-width: 768px){
    .main{
        margin-left: 50%;
    }

    .sidenav{
        width: 40%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    .login-form{
        margin-top: 80%;
    }

    .register-form{
        margin-top: 20%;
    }
}


.login-main-text{
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}

.login-main-text h2{
    font-weight: 300;
}

.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>
@endsection

@section('scripts')
<script>
    new Vue({
        el: '#app'
    })
</script>
@endsection