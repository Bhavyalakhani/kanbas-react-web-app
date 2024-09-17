export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h4>
          <b>Assignment Name</b>
        </h4>
      </label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <br />
      <table style={{ borderBottomColor: "black", borderBottom: 10 }}>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value={"ASSIGNEMNTS"}>
                ASSIGNMENTS
              </option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value={"Percentage"}>
                Percentage
              </option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected value={"Online"}>
                Online
              </option>
            </select>
            <br />
            <br />
            <label htmlFor="wd-text-entry">Online Entry Options</label>
            <br />
            <input type="checkbox" name="text-entry" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="text-entry" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input type="checkbox" name="text-entry" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="text-entry"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotations</label>
            <br />
            <input type="checkbox" name="text-entry" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <br />
        <tr>
          <td valign="top" align="right">
            Assign
          </td>
          <td>
            <label>Assign to</label>
            <br />
            <textarea
              id="wd-assign-to"
              placeholder="Everyone"
              defaultValue={"Everyone"}
            ></textarea>
            <div id="wd-due-date">
              <label>Due</label>
            </div>
            <div id="wd-due-date">
              <input type="date" id="wd-due-date" value="2000-01-21" />
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ marginBottom: "20px" }}>
                <label id="wd-available-from">Available From</label>
                <br />
                <input type="date" id="available-from" value="2024-05-06" />
                <p id="available-from-display"></p>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label id="wd-available-until">Until</label>
                <br />
                <input type="date" id="available-until" value="2024-05-13" />
                <p id="available-until-display"></p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <hr />
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="right">
            <button style={{marginRight: 5}}>cancel</button>
            <button>save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
