import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase config/firebaseConfig'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const imageListRef = ref(storage, 'newsImage/')
export const AddNewsDoc = async (defaulValue, state, file, die) => {
	if (defaulValue.type === 'global_news') {
		const imgesUrl = []
		const photoTitle = []
		if (file) {
			die(true)
			console.log('starting')
			for (let item of file) {
				const storageRef = ref(storage, `newsImage/${item.name}`)
				const snapshot = await uploadBytes(storageRef, item)
				console.log('imge download')
			}
			for (let i of file) {
				const getUrl = await getDownloadURL(ref(storage, `newsImage/${i.name}`))
				imgesUrl.push(getUrl)
				photoTitle.push(i.name)
			}
		}
		console.log('starting add doc')
		const newDoc = await addDoc(collection(db, `${defaulValue.type}`), {
			date: Date.now(),
			imageUrl: imgesUrl,
			photoTitle: photoTitle,
			...defaulValue
		})
		die(false)
		state({
			title: '',
			description: '',
			type: ''
		})
		alert('News added successfully')
	} else {
		const imgesUrl = []
		const photoTitle = []
		if (file) {
			die(true)
			console.log('starting')
			for (let item of file) {
				const storageRef = ref(storage, `newsImage/${item.name}`)
				const snapshot = await uploadBytes(storageRef, item)
				console.log('imge download')
			}
			for (let i of file) {
				const getUrl = await getDownloadURL(ref(storage, `newsImage/${i.name}`))
				imgesUrl.push(getUrl)
				photoTitle.push(i.name)
			}
		}
		console.log('starting add doc')
		const newDoc = await addDoc(collection(db, `${defaulValue.type}`), {
			date: Date.now(),
			imageUrl: imgesUrl,
			photoTitle: photoTitle,
			...defaulValue
		})
		die(false)
		state({
			title: '',
			description: '',
			type: ''
		})
		alert('News added successfully')
	}
}
const summary = collection(db, 'summary')
export const AddSummary = async (defaulValue, state, file, die) => {
	if (file) {
		die(true)
		let value = file[0].name
		try {
			console.log('starting')
			const storageRef = ref(storage, `summary/${value}`)
			const uploadFile = await uploadBytes(storageRef, file[0])
			console.log('file download')
			const getUrl = await getDownloadURL(ref(storage, `summary/${value}`))
			console.log('starting add doc')
			const newDoc = await addDoc(summary, {
				date: Date.now(),
				downloadUrl: getUrl,
				fileName: value,
				...defaulValue
			})
			state({
				fullName: '',
				email: '',
				city: '',
				phoneNumber: '',
				description: '',
				summary: false
			})
			alert('Resume sent successfully')
			die(false)
		} catch (e) {
			die(false)
			console.error(e)
		}
	}
}

export const WriteProduct = async (
	defaulValue,
	state,
	file,
	productType,
	die
) => {
	const fertilizers = collection(db, productType)
	if (file) {
		die(true)
		let value = file[0].name
		try {
			console.log('starting')
			const storageRef = ref(storage, `${productType}/${value}`)
			const snapshot = await uploadBytes(storageRef, file[0])
			const getUrl = await getDownloadURL(
				ref(storage, `${productType}/${value}`)
			)
			console.log('starting add doc')
			const newDoc = await addDoc(fertilizers, {
				date: Date.now(),
				imageUrl: getUrl,
				imageName: value,
				...defaulValue
			})
			die(false)
			if (productType === 'toxins') {
				state({
					title: '',
					description: '',
					productDetaile: '',
					table: [{ culture: '', pest: '', norm: '' }],
					productType: ''
				})
			} else {
				state({
					title: '',
					subTitle: '',
					benefits: '',
					chemistry: '',
					table: [{ culture: '', norm: '' }],
					productType: ''
				})
			}
			alert('Product added successfully')
		} catch (e) {
			console.error(e)
			die(false)
		}
	}
}
export const WriteArticle = async (defaulValue, state, file, file2, die) => {
	const fertilizers = collection(db, 'articles')
	if (file) {
		die(true)
		let value = file[0].name
		let value2 = file2[0].name
		try {
			console.log('starting')
			const storageRef = ref(storage, `articles/${value}`)
			const snapshot = await uploadBytes(storageRef, file[0])
			const getUrl = await getDownloadURL(ref(storage, `articles/${value}`))

			const storageRef2 = ref(storage, `articles/${value2}`)
			const snapshot2 = await uploadBytes(storageRef2, file2[0])
			const getUrl2 = await getDownloadURL(ref(storage, `articles/${value2}`))
			console.log('starting add doc')
			const newDoc = await addDoc(fertilizers, {
				date: Date.now(),
				fileUrl: getUrl,
				imageUrl: getUrl2,
				photoTitle: [value, value2],
				...defaulValue
			})
			die(false)
			state({
				title: '',
				type: '',
				description: ''
			})
			alert('Article added successfully')
		} catch (e) {
			console.error(e)
		}
	}
}
