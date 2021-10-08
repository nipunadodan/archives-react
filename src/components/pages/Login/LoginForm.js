import React, {Component} from 'react';
import Button from "../../template/common/Button";

class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            login: false
        }
    }

    componentDidMount() {

    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        const api_base = process.env.REACT_APP_API_BASE;
        fetch(api_base+'login-process',{
            method:'post',
            body: new URLSearchParams({
                'username' : this.state.username,
                'password' : this.state.password
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.status === 'success') {
                        localStorage.setItem('login', true)

                        this.setState({
                            login:true
                        })
                    }else{
                        localStorage.setItem('login', false)
                        this.setState({
                            login:false
                        })
                    }
                    this.props.parentCallback(result);
                }
            )
        event.preventDefault();
    }

    render() {
        if(this.state.login){
            //return <Redirect to={'/'} />
            //window.location.reload()
        }
        return(
            <div className="login-wrapper bg-white rounded-2xl px-8 md:px-16 py-20 mt-6">
                <form onSubmit={this.handleSubmit}>
                    <div className={'my-3'}>
                        <label className={'text-sm mb-1 inline-block'}>Username</label>
                        <input type="text" className={'p-2 rounded-lg w-full border-2 focus:border-archives hover:border-gray-400 outline-none'} placeholder={'Username'} name={'username'} onChange={this.handleChange} autoComplete={'off'} />
                    </div>
                    <div className={'my-3'}>
                        <label className={'text-sm mb-1 inline-block'}>Password</label>
                        <input type="password" className={'p-2 rounded-lg w-full border-2 focus:border-archives hover:border-gray-400 outline-none'} placeholder={'Password'} name={'password'} onChange={this.handleChange} />
                    </div>
                    <div className={'flex justify-end mt-6'}>
                        <Button type={'submit'} outline={false} text={'Login'} size={'sm'} className={'px-6'} />
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm