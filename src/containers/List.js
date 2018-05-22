import { connect } from 'react-redux';
import TodoList from '../components/todo-list';
import {deleteList, toggleListStatus} from "../actions";

const mapStateToProps = state => ({
	items: state.items,
});

const mapDispatchToProps = {
    deleteList,
    toggleListStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);