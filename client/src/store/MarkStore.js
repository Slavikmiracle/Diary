import {makeAutoObservable} from "mobx";

export default class MarkStore {
    constructor() {
        this.mark = []
        makeAutoObservable(this)
        this._selectedMark = {}
    }

    setMark(mark) {
        this.mark = mark
    }
    setSelectedMark(mark){
        this._selectedMark=mark
    }

    getisMark() {
        return this.mark
    }
    
}