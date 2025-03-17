import { createContext, useEffect, useState } from 'react'

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([])

	// Загружаем избранное из localStorage при монтировании
	useEffect(() => {
		const storedFavorites = localStorage.getItem('favorites')
		if (storedFavorites) {
			setFavorites(JSON.parse(storedFavorites))
		}
	}, [])

	// Сохраняем избранное в localStorage при изменениях
	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}, [favorites])

	// Функция для переключения избранного
	const toggleFavorite = (product) => {
		setFavorites((prevFavorites) => {
			const exists = prevFavorites.find((fav) => fav.id === product.id)
			if (exists) {
				// Если товар уже в избранном – удаляем его
				return prevFavorites.filter((fav) => fav.id !== product.id)
			} else {
				// Иначе добавляем его в избранное
				return [...prevFavorites, product]
			}
		})
	}

	return (
		<FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
			{children}
		</FavoritesContext.Provider>
	)
}