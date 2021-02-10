import React, {useCallback, useMemo, useState} from 'react'

export default {
    title: 'useMemo'
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const Users = React.memo((props: { users: Array<string> }) => {
    console.log('USERS')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
})


export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Sonya', 'Igor', 'Bob', 'Vlad'])

    const addUser = () => {
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            result for a: {resultA}
        </div>
        <div>
            result for b: {resultB}
        </div>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const memorizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            setBooks([...books, 'Angular' + new Date().getTime()])
        }
    }, [books]);

    const memorizedAddBook2 = useCallback(() => {
        console.log(books)
        setBooks([...books, 'Angular' + new Date().getTime()])
    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Books abbBook={memorizedAddBook2}/>
    </>
}

type BooksPropsType = {
    abbBook: () => void
}

const Books = React.memo((props: BooksPropsType) => {
    console.log('BOOKS')
    return <div>
        <button onClick={() => props.abbBook()}>add book</button>
    </div>
})
