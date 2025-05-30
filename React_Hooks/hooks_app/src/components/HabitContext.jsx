import { createContext, useContext, useState, useEffect, useCallback, useLayoutEffect, memo } from 'react'

const HabitContext = createContext();

export const HabitProvider = ({children}) => {

    useLayoutEffect(() => {
        const storedHabits = localStorage.getItem('habits');
        console.log(storedHabits);
        if(storedHabits) {
            setHabits(JSON.parse(storedHabits));
        }
    }, [])

    const [habits, setHabits] = useState([]);

    useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habits));
    }, [habits])

    const addHabit = useCallback((title, description) => {
        setHabits(prev => [...prev, {title, description}]);
    });

    return (
        <HabitContext.Provider value={{ habits, addHabit }}>
            {children}
        </HabitContext.Provider>
    );
};

export const useHabitContext = () => useContext(HabitContext);