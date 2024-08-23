<?php
include_once('header.php');
?>
<!-- /. NAV SIDE  -->
<div id="page-wrapper">
    <div id="page-inner">
        <div class="row">
            <div class="col-md-12">
                <h2>Edit Data Of Student</h2>
                <hr>
            </div>
        </div>
        <!-- /. ROW  -->
        <hr />
        <div class="row">
            <div class="col-md-12">
                <!-- Form Elements -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Edit Form Details
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-12">
                                <hr>
                                <form role="form" method="post" enctype="multipart/form-data">
                                    <div class="form-group">
                                        <label>First Name :</label>
                                        <input type="text" name="first_name" class="form-control" value="<?php echo $fetch->first_name;?>"/> 
                                    </div>
                                    <div class="form-group">
                                        <label>Last Name :</label>
                                        <input type="text" name="last_name" class="form-control" value="<?php echo $fetch->last_name; ?>"/>
                                    </div>
                                    <div class="form-group">
                                        <label>Email :</label>
                                        <input type="email" name="email" class="form-control" value="<?php echo $fetch->email;?>"/>
                                    </div>
                                    <div class="form-group">
                                        <label>Mobile No :</label>
                                        <input type="number" name="m_no" class="form-control" value="<?php echo $fetch->m_no;?>"/>
                                    </div>
                                    <div class="form-group">
                                        <label>Profile Photo :</label>
                                        <input type="file" name="profile_pic" class="form-control" value="<?php echo $fetch->profile_pic;?>"/>
                                        <img src="./upload/userimg/<?php echo $fetch->profile_pic;?>" width="50px">
                                    </div>
                
                                    <button type="submit" name="save" class="btn btn-default">Submit Button</button>
                                    <button type="reset" class="btn btn-primary">Reset Button</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /. ROW  -->
    </div>
</div>

<?php
include_once('footer.php');
?>
