import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import yandex from '../assets/yandex.svg'
import google from '../assets/google.svg'
import vk from '../assets/vk.svg'

const FormSignUp = () => {
	const { signing } = useSelector((state) => state.signUp)

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm()

	return (
		<div className='w-[490px] min-h-[230px] bg-[#171717] mt-[66px] flex flex-col border-[#525252] border rounded-[15px] px-[28px] pt-[23px]'>
			<form action='submit' className=''>
				<div className='text-white mb-[22px]'>
					<p className='text-xl'>Зарегистрируйтесь</p>
					<p className='text-[#797979] text-[16px]'>Чтобы расширить свои возможности</p>
				</div>
				<div className='flex flex-col text-white'>
					<input
						type='text'
						className='bg-[#171717] border rounded-[6px] border-[#525252] px-[16px] py-[12px] mb-[17px] text-[18px] placeholder-[#525252] focus:ring-2 focus:ring-[#7783F2]'
						placeholder='Электронная почта или телефон'
					/>
					<input
						type='text'
						className='bg-[#171717] border rounded-[6px] border-[#525252] px-[16px] py-[12px] mb-[17px] text-[18px] placeholder-[#525252] focus:ring-2 focus:ring-[#7783F2]'
						placeholder='Пароль'
					/>
				</div>
				<button
					type='submit'
					className='form-button text-white font-bold text-center w-full rounded-[6px] py-[13px] mb-[16px]'
				>
					Продолжить
				</button>
				<div className='text-center mb-[16px]'>
					<p className='text-[#525252]'>
						Уже имеете свой профиль?{' '}
						<span className='text-[#7783F2] font-bold'>
							<a href=''>Войти</a>
						</span>
					</p>
				</div>
				<div className='w-full bg-[#525252] h-[1px]'></div>
				<div className='flex justify-between my-[35px]'>
					<div className='flex justify-center items-center border border-[#525252] w-[130px] h-[46px] cursor-pointer rounded-[6px]'>
						<a href=''>
							<img src={yandex} alt='' />
						</a>
					</div>
					<div className='flex justify-center items-center border border-[#525252] w-[130px] h-[46px] cursor-pointer rounded-[6px]'>
						<a href=''>
							<img src={google} alt='' />
						</a>
					</div>
					<div className='flex justify-center items-center border border-[#525252] w-[130px] h-[46px] cursor-pointer rounded-[6px]'>
						<a href=''>
							<img src={vk} alt='' />
						</a>
					</div>
				</div>
			</form>
		</div>
	)
}

export default FormSignUp

//todo добавить useFormHook
