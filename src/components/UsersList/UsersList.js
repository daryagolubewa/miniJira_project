import React from 'react';
import './UsersList.css'


class UsersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { users, admin } = this.props;
        let newUsers = [...users];
        newUsers.splice(2, 0, admin);

        return (
            <div className='user-list-main'>
                {newUsers.map(item => (
                    <div className='user-list-main-block'>
                        <div className='user-list-main-info'> {item.name} </div>
                        <div className='user-list-main-info'> {item.age} </div>
                        <div className='user-list-main-info'> {item.city} </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default UsersList;

// стилизовать список пользователей + вывести все данные
// выводить админа между пользователями
// стилизовать счётчик (менять цвет фона блока цифры)
// module.css
// обработчик onChange
// сверстать табличку