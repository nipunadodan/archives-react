import React, {Component} from "react";
import {Link, Navigate} from "react-router-dom";
import Button from "../../../template/common/Button";
import Header from "../../../template/header/Header";

class Register extends Component{
    state = {
        username: '',
        password: '',
        email: '',
        login: false,
        status: {
            type: '',
            message: '',
            error: '',
        },
        validation:{
            username:{
                status:'success',
                message:''
            },
            email:{
                status:'success',
                message:''
            }
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
        if(name === 'username' || name === 'email'){
            const api_base = process.env.REACT_APP_API_BASE
            fetch(api_base+'register-validation',{
                method:'post',
                body:new URLSearchParams({
                    [name]:value
                }),
            })
                .then(res => res.json())
                .then((result) => {
                        this.setState( (prevState ) => ({
                            validation:{
                                ...prevState.validation,
                                [name]:{
                                    status:result.status,
                                    message:result.message
                                }
                            }

                        })
                    )
                })
        }
    }

    handleSubmit = (event) => {
        const api_base = process.env.REACT_APP_API_BASE
        const data = this.state

        fetch(api_base+'register',{
            method:'post',
            body: new URLSearchParams({
                'username':data.username,
                'password':data.password,
                'email':data.email,
                'first_name':data.first_name,
                'last_name':data.last_name,
                'prefix':data.prefix,
                'affiliation':data.affiliation,
                'degree_type':data.degree_type,
                'degree_institute':data.degree_institute,
                'research_interest':data.research_interest,
            }),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)
                    if(result.status === 'success'){
                        //TODO: Modal popup or redirect to new page with success message
                        this.setState({
                            status:{
                                type:result.status,
                                message:result.message
                            }
                        })

                    }else{
                        this.setState({
                            status:{
                                type: 'danger',
                                message: result.message,
                            }
                        })
                    }
                }
            )
            .catch((error) => {
                this.setState({
                    status:{
                        type: 'danger',
                        message: 'Something went wrong',
                        error: error,
                    }
                })
            })

        event.preventDefault()
    }

    render() {
        if(this.state.status.type === 'success'){
            return <Navigate to='/login'/>;
        }
        return (
            <div className={'md:w-4/5 mx-auto'}>
                <Header nav={false} />
                <div className="login-wrapper bg-white rounded-2xl px-8 md:px-16 pt-14 pb-16 mt-6">
                    <h1 className={'font-black text-3xl text-center mb-6'}>Register</h1>
                    <p className={'text-center text-sm mb-8 text-gray-800'}>Already have an account? <Link className={'font-bold hover:text-black'} to={'/login'}>Login</Link></p>
                    <form onSubmit={this.handleSubmit}>
                        <div className={'my-3 grid grid-cols-2 gap-4'}>
                            <div>
                                <label className={'text-sm mb-1 inline-block'}>First Name</label>
                                <input type="text"
                                       className={'p-2 rounded-lg w-full border-2 focus:border-archives hover:border-gray-400 outline-none'}
                                       placeholder={'First Name'} name={'first_name'} onChange={this.handleChange}
                                       autoComplete={'off'}
                                       required={true}
                                />
                            </div>
                            <div>
                                <label className={'text-sm mb-1 inline-block'}>Last Name</label>
                                <input type="text"
                                       className={'p-2 rounded-lg w-full border-2 focus:border-archives hover:border-gray-400 outline-none'}
                                       placeholder={'Last Name'} name={'last_name'} onChange={this.handleChange}
                                       autoComplete={'off'}
                                       required={true}
                                />
                            </div>
                        </div>
                        <div className={'my-3 grid grid-cols-3 gap-4'}>
                            <div>
                                <label className={'text-sm mb-1 inline-block'}>Preferred Prefix</label>
                                <select
                                       className={'p-2 rounded-lg w-full border-2 focus:border-archives hover:border-gray-400 outline-none'}
                                       name={'prefix'}
                                       onChange={this.handleChange}
                                >
                                    <option value={0}>Please select a prefix</option>
                                    <option value={'Prof'}>Prof</option>
                                    <option value={'Dr'}>Dr</option>
                                    <option value={'Mr'}>Mr</option>
                                    <option value={'Ms'}>Ms</option>
                                </select>
                            </div>
                            <div className={'col-span-2'}>
                                <label className={'text-sm mb-1 inline-block'}>Affiliation</label>
                                <input type="text"
                                       className={'p-2 rounded-lg w-full border-2 focus:border-archives hover:border-gray-400 outline-none'}
                                       placeholder={'Affiliation (University / College / High School / Other)'} name={'affiliation'} onChange={this.handleChange}
                                       autoComplete={'off'} />
                            </div>
                            <div>
                                <label className={'text-sm mb-1 inline-block'}>Highest Educational Qualification</label>
                                <select
                                       className={'p-2 rounded-lg w-full border-2 focus:border-archives hover:border-gray-400 outline-none'}
                                       name={'degree_type'} onChange={this.handleChange}
                                >
                                    <option value={0}>Please select a choice</option>
                                    <option value={1}>Higher Certificate</option>
                                    <option value={2}>National Diploma</option>
                                    <option value={3}>Bachelor's Degree</option>
                                    <option value={4}>Honours Degree</option>
                                    <option value={5}>Master's Degree</option>
                                    <option value={6}>Doctoral Degree</option>
                                </select>
                            </div>
                            <div className={'col-span-2'}>
                                <label className={'text-sm mb-1 inline-block'}>Institute</label>
                                <input type="text"
                                       className={'p-2 rounded-lg w-full border-2 focus:border-archives hover:border-gray-400 outline-none'}
                                       placeholder={'Institute (University / College / High School / Other)'} name={'degree_institute'} onChange={this.handleChange}
                                       autoComplete={'off'} />
                            </div>
                            <div className={'col-span-3'}>
                                <label className={'text-sm mb-1 inline-block'}>Research Interest</label>
                                <input type="text"
                                       className={'p-2 rounded-lg w-full border-2 focus:border-archives hover:border-gray-400 outline-none'}
                                       placeholder={'Research Interest'} name={'research_interest'} onChange={this.handleChange}
                                       autoComplete={'off'} />
                            </div>
                            <div>
                                <label className={'text-sm mb-1 inline-block'}>Email</label>
                                <input type="email"
                                       className={'p-2 rounded-lg w-full border-2 focus:border-archives hover:border-gray-400 outline-none'}
                                       placeholder={'Email'} name={'email'} onChange={this.handleChange}
                                       autoComplete={'off'}
                                       required={true}
                                />
                            </div>
                            <div>
                                <label className={'text-sm mb-1 inline-block'}>Username</label>
                                <input type="text"
                                       className={'p-2 rounded-lg w-full border-2 focus:border-archives hover:border-gray-400 outline-none'}
                                       placeholder={'Username'} name={'username'} onChange={this.handleChange}
                                       autoComplete={'off'}
                                       required={true}
                                />
                            </div>
                            <div>
                                <label className={'text-sm mb-1 inline-block'}>Password</label>
                                <input type="password"
                                       className={'p-2 rounded-lg w-full border-2 focus:border-archives hover:border-gray-400 outline-none'}
                                       placeholder={'Password'}
                                       name={'password'}
                                       onChange={this.handleChange}
                                       required={true}
                                />
                            </div>
                        </div>

                        <div className={'flex items-center mt-6'}>
                            <div className={'flex-grow text-right px-6 '+(this.state.status.type !== '' ? 'text-'+this.state.status.type : '')}>
                                    {this.state.status.message}
                                <div className={'text-success text-danger'}/>
                            </div>
                            <div className={''}>
                                <Button type={'submit'} outline={false} text={'Register'} size={'sm'} className={'px-6'}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register