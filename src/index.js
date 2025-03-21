/**
 * 할 일에 대한 타입 선언
 * @typedef {Object} ToDo
 * @property {string} id - 식별자
 * @property {string} content - 내용
 * @property {boolean} isFinished - 완료 여부
 * @property {string[]} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/**
 * 할 일을 추가할 수 있습니다.
 * 내용없이 추가할 수 없습니다.
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그들
 *
 * @returns {ToDo} 추가된 할 일을 반환합니다.
 */
const creatToDo = () => {};

/**
 * ID가 있을 경우 특정 할 일에 대한 정보를, 그렇지 않은 경우 모든 할 일을 반환합니다.
 * @param {number} [id]
 *
 * @returns {(ToDo[] | ToDo)}
 */
const readToDo = () => {};

/**
 * ID를 제외한 모든 속성을 수정할 수 있습니다.
 * 특정 할 일의 특정 태그를 수정할 수 있습니다.
 * @param {number} id - 수정할 할 일을 특정합니다.
 * @param {string} [content] - 내용 수정시 content를 전달합니다.
 * @param {boolean} [isFinished] - 할 일 마침 여부를 수정합니다.
 * @param {string} [category] - 카테고리를 수정합니다.
 * @param {string[]} [tags] - 태그들을 수정합니다.
 *
 * @returns {ToDo} - 수정된 할 일을 반환합니다.
 */
const updateToDo = () => {};

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있습니다.
 * 모든 할 일을 제거할 수 있습니다.
 * 특정 할 일의 특정 태그를 삭제할 수 있습니다.
 * 특정 할 일의 모든 태그를 제거할 수 있습니다.
 *
 * @param {number} [id] - 특정 할 일을 수정하려는 경우에 쓰입니다.
 * @param {string[]} [tags] - 해당 태그들을 모두 삭제합니다.
 */
const deleteToDo = () => {};
