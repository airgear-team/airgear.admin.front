import { useState, useEffect } from "react";
import { Pagination } from "../Pagination/Pagination"
import style from "./styles.module.scss"
import { USERS_PER_PAGE, START_OF_QUERY, COUNT_OF_RECORDS } from "../../constants";
import { BASE_URL, API_TOKEN } from "../../constants";

// const BASE_URL = import.meta.env.ADMIN_BASE_URL;
// const API_TOKEN = import.meta.env.AIRGEAR_API_TOKEN;

export const UserResultsTable = () => {

    const [users, setUsers] = useState([])

    const [currentPage, setCurrentPage] = useState(1);

    // // Get current users
    const indexOfLastUser = currentPage * USERS_PER_PAGE;
    const indexOfFirstUser = indexOfLastUser - USERS_PER_PAGE;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        fetch(`${BASE_URL}users?page=${START_OF_QUERY}&size=${COUNT_OF_RECORDS}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${API_TOKEN}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setUsers(data.content);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });

    }, [])

    return (
        <div className={style.wrapper}>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Roles</th>
                        <th>Count <br /> (goods)</th>
                        <th>Last Activity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.roles}</td>
                            <td>{user.goods}</td>
                            <td>{user.lastActivity}</td>
                            <td>{user.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                usersPerPage={USERS_PER_PAGE}
                totalUsers={users.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    )
}