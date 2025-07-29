import Image from 'next/image'

export default function Footer() {

	return(
		<footer className='w-full bg-imperialIndigo justify-center text-serif items-center py-4 px-4'>
			<p className='bg-imperialIndigo text-center font-serif text-gold'>
				&copy; {new Date().getFullYear()} Carolingian Inc. x Carolingian Programs Inc. All rights reserved.
			</p>
		</footer>
	)
}