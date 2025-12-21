import React from "react";

const Footer = ({ completedTasksount = 2, activeTasksCount = 3 }) => {
  return (
    <>
      {completedTasksount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksount > 0 && (
              <>
                Tuyệt vời, bạn đã hoàn thành {completedTasksount} việc
                {activeTasksCount > 0 &&
                  `, còn ${activeTasksCount} việc nữa thôi. Cố lên!`}
              </>
            )}
            {completedTasksount === 0 && activeTasksCount > 0 && (
              <>Hãy bắt đầu làm {activeTasksCount} nhiệm vụ nào!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
