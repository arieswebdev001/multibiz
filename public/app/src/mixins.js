export const mixins = {
    methods: {
        spinButton(target){
            target.classList.add("m-loader");
            target.classList.add("m-loader--right");
            target.setAttribute("disabled", true);
        },
        stopButton(target){
            target.classList.remove("m-loader");
            target.classList.remove("m-loader--right");
            target.removeAttribute("disabled");
        },
        redirectToHome(){
            window.location.href="../../#/dashboard";
        },
        redirectToLogin(){
            window.location.href="../../#/login";
        },
        sweetAlert(text,confirm_callback){
            swal({title:"Confirmation",
                  text:text,
                  showCancelButton:!0,
                  closeOnCancel:!0,
                  cancelButtonClass:'btn-sm red',
                  confirmButtonClass:'btn-sm blue',
                  confirmButtonText:'YES',
                  cancelButtonText:'NO',},
                  function(t)
                  {
                      if(t){confirm_callback()
                    }
                }
            )
        }
    }
};