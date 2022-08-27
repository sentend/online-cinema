import React from 'react'
import { useForm } from 'react-hook-form'

import yandex from '../assets/yandex.svg'
import google from '../assets/google.svg'
import vk from '../assets/vk.svg'

const additionalButtons = [
	{
		src: yandex,
	},
	{
		src: google,
	},
	{
		src: vk,
	},
]

const FormSignUp = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const buttons = additionalButtons.map(({ src }) => {
		return (
			<div className='flex justify-center items-center border border-[#525252] w-[130px] h-[46px] cursor-pointer rounded-[6px] hover:bg-[#292929] duration-100'>
				<a href=''>
					<img src={src} alt='' />
				</a>
			</div>
		)
	})

	return (
		<div className='w-[490px] min-h-[230px] bg-[#171717] mt-[66px] flex flex-col border-[#525252] border rounded-[15px] px-[28px] pt-[23px]'>
			<form
				action='submit'
				className=''
				onSubmit={handleSubmit((data) => {
					console.log(data)
					reset()
				})}
			>
				<div className='text-white mb-[22px]'>
					<p className='text-xl'>Зарегистрируйтесь</p>
					<p className='text-[#797979] text-[16px]'>Чтобы расширить свои возможности</p>
				</div>
				<div className='flex flex-col text-white'>
					<div className='mb-[17px] flex flex-col'>
						<input
							type='text'
							className='bg-[#171717] border rounded-[6px] border-[#525252] px-[16px] py-[12px] mb-[7px] text-[18px] placeholder-[#525252] focus:ring-2 focus:ring-[#7783F2]'
							placeholder='Электронная почта или телефон'
							{...register('email', {
								required: 'This field is required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: 'This field for email',
								},
							})}
						/>
						{errors?.email && <span className='text-red-500 text-sm'>{errors?.email?.message}</span>}
					</div>
					<div className='mb-[17px] flex flex-col'>
						<input
							type='password'
							className='bg-[#171717] border rounded-[6px] border-[#525252] px-[16px] py-[12px] mb-[17px] text-[18px] placeholder-[#525252] focus:ring-2 focus:ring-[#7783F2]'
							placeholder='Пароль'
							{...register('password', {
								required: 'This field is required',
								minLength: {
									value: 4,
									message: 'Min length is 4',
								},
							})}
						/>
						{errors?.password && <span className='text-red-500 text-sm'>{errors?.password?.message}</span>}
					</div>
				</div>
				<button
					type='submit'
					className='form-button text-white font-bold text-center w-full rounded-[6px] py-[13px] mb-[16px]'
				>
					Продолжить
				</button>
				<div className='text-center mb-[16px]'>
					<p className='text-[#525252]'>
						Уже имеете свой профиль?
						<span className='text-[#7783F2] font-bold'>
							<a href=''> Войти</a>
						</span>
					</p>
				</div>
				<div className='w-full bg-[#525252] h-[1px]'></div>
				<div className='flex justify-between my-[35px]'>{buttons}</div>
			</form>
		</div>
	)
}

export default FormSignUp
