var app = new function(){
    this.el = document.getElementById('tasks')
    this.tasks=[]

    this.FetchAll = function() {
        var data = '';

        if(this.tasks.length > 0){
            for(i = 0; i < this.tasks.length; i++){
                data+='<tr>'
                data+='<td>' + '🌿 ' + this.tasks[i] + '</td>';
                data+='<td><button onclick="app.Edit('+i+')" class="btn btn-warning btn-sm m-2">Edit</button></td>';
                data+='<td><button onclick="app.Delete('+i+')" class="btn btn-danger btn-sm m-2">Delete</button></td>';
                data += '</tr>'
            }
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data;
    }
    this.Add = function(){
        el=document.getElementById('add');
        var task = el.value;
        if(task){
            this.tasks.push(task.trim());
            el.value="";
            this.FetchAll();
        }

    }

    this.Edit = function(item){
        el = document.getElementById("edit-todo");
        el.value = this.tasks[item]
        document.getElementById("edit-box").className = "d-flex justify-content-center input-group"
        self=this;

        document.getElementById('save-edit').onsubmit = function(){
            var task = el.value;
            if(task){
                self.tasks.splice(item, 1, task.trim());
                self.FetchAll();
                closeInput();
                document.getElementById("edit-box").className = "d-none justify-content-center input-group"
            }
        }
    }

    this.Delete = function(item){
        this.tasks.splice(item, 1)
        this.FetchAll();

    }

    this.Count = function(data){
        var el = document.getElementById("count");
        var name = 'Tasks';
        if(data){
            if(data == 1){
                name = "Tasks";
            }
            el.innerHTML = data+ ' '+name; 
            
        }else{
            el.innerHTML = "No " + name;

        }
    }
}

app.FetchAll();

function closeInput(){
    document.getElementById("edit-box").style.display = "none";
}