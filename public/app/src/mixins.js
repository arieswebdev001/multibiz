import axios from 'axios';
export const mixins = {
    methods: {
        axios:axios,
        moment:moment,
        spinButton(target){
            target.addClass("m-loader mloader--right disabled");
        },
        stopButton(target){
            target.removeClass("m-loader mloader--right disabled");
        }
    }
};